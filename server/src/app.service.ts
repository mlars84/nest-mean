import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  root(): any {
    return {
      success: 200,
      data: {
        cat: 'Gus',
        dog: 'Fritz'
      }
    }
  }
}
