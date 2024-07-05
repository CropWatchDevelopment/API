export function paginate(query: any, page: number, limit: number) {
    const offset = (page - 1) * limit;
    return {
      skip: +offset,
      take: +limit,
      ...query,
    };
  }
  