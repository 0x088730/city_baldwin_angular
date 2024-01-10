import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-report-error-dialog',
  templateUrl: './report-error-dialog.component.html',
  styleUrls: ['./report-error-dialog.component.scss']
})
export class ReportErrorDialogComponent implements OnInit {

  city: string;

  constructor(
    private dialogRef: MatDialogRef<ReportErrorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

    this.city = data.city;
  }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

}
