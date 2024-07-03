import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { createClient } from '@supabase/supabase-js';


@Injectable()
export class AuthService {
    private supabaseUrl = this.configService.get<string>('SUPABASE_URL');
    private supabaseKey = this.configService.get<string>('SUPABASE_KEY');
    private supabase = createClient(this.supabaseUrl, this.supabaseKey);
    constructor(private jwtService: JwtService, private configService: ConfigService) {}

  async signIn(email: string, password: string): Promise<{ access_token: string }> {
    const { data, error } = await this.supabase.auth.signInWithPassword({ email, password });
    if (error || !data.user) {
      throw new UnauthorizedException();
    }
    const payload = { sub: data.user.id, email: data.user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(email: string, password: string): Promise<{ access_token: string }> {
    const { data, error } = await this.supabase.auth.signUp({ email, password });
    if (error || !data.user) {
      throw new UnauthorizedException();
    }
    const payload = { sub: data.user.id, email: data.user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
