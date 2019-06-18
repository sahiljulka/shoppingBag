import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatDividerModule } from "@angular/material/divider";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    MatDividerModule,
    MatButtonModule
  ],
  exports: [
    MatCardModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    MatDividerModule,
    MatButtonModule
  ]
})
export class SharedModule {}
