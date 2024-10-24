// Import necessary modules from Supabase and NestJS
import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { SupabaseClient, User, createClient } from '@supabase/supabase-js';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  private supabase: SupabaseClient;

  constructor(private configService: ConfigService) {
    const supabaseUrl = this.configService.get<string>('SUPABASE_URL');
    const supabaseKey = this.configService.get<string>('SUPABASE_KEY');

    // Initialize Supabase client with version 2 package
    this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  // Function to validate a JWT token using Supabase
  async validateUser(token: string): Promise<User> {
    try {
      const { data: user, error } = await this.supabase.auth.getUser(token);
      if (error) {
        throw new UnauthorizedException('Invalid token or user not found');
      }
      return user.user;
    } catch (error) {
      throw new UnauthorizedException('Unable to validate user token');
    }
  }

  async validateApiKey(apiKey: string): Promise<boolean> {
    // Here you would implement logic to validate the API key
    // For now, we assume a hardcoded valid key for demonstration purposes

    let { data: api_keys, error } = await this.supabase
      .from('api_keys')
      .select('*')
      .single();

    if (error) {
      throw new UnauthorizedException('Invalid API key');
    }
    return api_keys;
  }

  // Function to sign in with email and password
  async signInWithEmail(email: string, password: string): Promise<any> {
    try {
      const { data: session, error } = await this.supabase.auth.signInWithPassword({ email, password });
      if (error) {
        throw new UnauthorizedException('Invalid credentials');
      }
      return session;
    } catch (error) {
      throw new UnauthorizedException('Unable to sign in with email and password');
    }
  }
}