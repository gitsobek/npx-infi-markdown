import { InjectionToken } from '@angular/core';
import { UserStyles } from '../models/Style';

export const USER_STYLE_CONFIG = new InjectionToken<UserStyles>('User Style Config');
