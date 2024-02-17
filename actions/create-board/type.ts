import {z} from 'zod';
import { board } from '@prisma/client';
import { ActionState} from '@/lib/create-safe-actions';
import {CreateBoard} from   './schema';
export type InputType = z.infer<typeof CreateBoard>;
export type ReturnType =  ActionState<InputType,board>
