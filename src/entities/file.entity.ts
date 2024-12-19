import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Category } from './category.entity';

export enum FileStatus {
  DONE = 'done',
  IN_PROGRESS = 'in_progress',
  FAILED = 'failed',
}

@Entity('files')
export class File {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  file_name: string;

  @Column()
  file_path: string;

  @Column()
  file_type: string;

  @Column()
  document_index: string;

  @Column({
    type: 'enum',
    enum: FileStatus,
    default: FileStatus.IN_PROGRESS,
  })
  flag: FileStatus;

  @Column()
  category_id: number;

  @ManyToOne(() => Category, category => category.files)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
} 