import { Repository, Connection } from 'typeorm';
import { AttendanceEntity } from "./attendance.entity";
import { createAttendanceDto } from "./create-attendance.dto";
import { UpdatedAttendanceDto } from "./update-attendance.dto";
export declare class AttendanceService {
    private readonly attendanceRepository;
    private connection;
    constructor(attendanceRepository: Repository<AttendanceEntity>, connection: Connection);
    create(createAttendanceDto: createAttendanceDto): Promise<AttendanceEntity>;
    createNote(note: string, internid: number, date: string): any;
    findAll(): Promise<AttendanceEntity[]>;
    findOne(id: number): Promise<AttendanceEntity>;
    findOneByIntern(id: number): Promise<AttendanceEntity[]>;
    update(id: number, updateAttendanceDto: UpdatedAttendanceDto): Promise<AttendanceEntity>;
    removeAll(id: number): Promise<any>;
    remove(id: number, date: string): Promise<any>;
}
