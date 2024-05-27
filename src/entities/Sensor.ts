import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("tbSensorData")
export default class SensorData {
  @PrimaryColumn({ nullable: false })
  id: number;

  @Column()
  timestamp: Date;

  @Column()
  raw_sensor_value: number;

  @Column()
  api_temperature: number;

  @Column()
  api_humidity: number;

  @Column()
  city: string;
}