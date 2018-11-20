export class Personal {
  public email: string;
  public password: string;
  public dateOfBirth: string;
  public placeOfBirth: string;

  constructor(
    email: string,
    password: string,
    dateOfBirth: string,
    placeOfBirth: string
  ) {
    this.email = email;
    this.password = password;
    this.dateOfBirth = dateOfBirth;
    this.placeOfBirth = placeOfBirth;
  }
}
