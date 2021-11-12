import { Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity('user')
export class User {
	@PrimaryGeneratedColumn( 'uuid')
	uuid!: string

	@Column({ type: "varchar", length: 50, nullable: false })
	username!: string

	@Column({ type: "varchar", length: 255, nullable: false })
	lastname!: string

	@Column({ type: "varchar", length: 255, nullable: false })
	firstname!: string

	@Column({ type: "varchar", length: 255, nullable: false})
	password!: string;
}
