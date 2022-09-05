package at.enough.dashboard.user;


public record AppUserSignUpRequest(String firstName,
                                   String lastName,
                                   String email,
                                   String password) {
}
