import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";

@Component({
  selector: "app-header-section-one",
  templateUrl: "./header-section-one.component.html",
  styleUrls: ["./header-section-one.component.css"]
})
export class HeaderSectionOneComponent implements OnInit {
  user: any;

  constructor(private userDetails: UserService) {}

  ngOnInit() {
    this.user = this.userDetails.getUser();
  }

  logout() {
    this.userDetails.logout();
  }

  checkLoginStatus(): boolean {
    return (
      this.userDetails.checkLocalStorage() && this.userDetails.getLoginStatus()
    );
  }

  checkLoginAsAdmin(): boolean {
    return (
      this.userDetails.checkLocalStorage() &&
      this.userDetails.getLoginAs() === "admin"
    );
  }
}
