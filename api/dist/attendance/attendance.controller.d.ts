import { AttendanceService } from './attendance.service';
import { Request } from 'express';
import { AttendanceEntity } from './attendance.entity';
interface typeNote {
    internid: string;
    date: string;
    note: string;
}
export declare class AttendanceController {
    private readonly attendanceService;
    constructor(attendanceService: AttendanceService);
    createAttendance(req: Request, attendance: AttendanceEntity): Promise<AttendanceEntity>;
    findAll(req: Request): Promise<AttendanceEntity[]>;
    createNote(req: Request, newNote: typeNote): Promise<AttendanceEntity>;
    findOne(req: Request, id: string): Promise<AttendanceEntity>;
    findOneByIntern(req: Request, id: string): Promise<AttendanceEntity[]>;
    update(req: Request, id: string, updatedAttendance: AttendanceEntity): Promise<AttendanceEntity>;
    removeAll(req: Request, id: string): Promise<any>;
    remove(req: Request, id: string, date: string): Promise<any>;
}
export {};
