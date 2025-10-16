import { Injectable, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private toastr = inject(ToastrService);

  showSuccess(message: string, title: string) {
    this.toastr.success(message, title);
  }

  showInfo(message: string, title: string) {
    this.toastr.info(message, title);
  }
}
