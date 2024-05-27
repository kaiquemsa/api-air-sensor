import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("tbPredictions")
export default class Predictions {
  @PrimaryColumn({ nullable: false }) 
  id: number;

  @Column()
  timestamp: Date;

  @Column()
  co2_prediction_in_1_day: number;  

  @Column()
  co2_prediction_in_7_days: number;  

  @Column()
  co2_prediction_in_30_days: number;  
}
