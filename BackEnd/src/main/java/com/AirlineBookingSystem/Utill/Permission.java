package com.AirlineBookingSystem.Utill;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public enum Permission {

    ADMIN_READ("admin:read"),
    ADMIN_UPDATE("admin:update"),
    ADMIN_CREATE("admin:create"),
    ADMIN_DELETE("admin:delete"),
    GUEST_READ("guest:read"),
    GUEST_UPDATE("guest:update"),
    GUEST_CREATE("guest:create"),
    GUEST_DELETE("guest:delete"),

    ;

    @Getter
    private final String permission;
}
