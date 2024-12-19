import { Category } from './category.entity';
export declare enum FileStatus {
    DONE = "done",
    IN_PROGRESS = "in_progress",
    FAILED = "failed"
}
export declare class File {
    id: number;
    file_name: string;
    file_path: string;
    file_type: string;
    document_index: string;
    flag: FileStatus;
    category_id: number;
    category: Category;
    created_at: Date;
}
