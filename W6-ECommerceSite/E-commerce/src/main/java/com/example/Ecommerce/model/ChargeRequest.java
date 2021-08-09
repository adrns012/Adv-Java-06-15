package com.example.Ecommerce.model;

import lombok.Data;

@Data
public class ChargeRequest {

    public enum Currency{
        ERU,USD
    }
    private String Description;
    private int amount;
    private Currency currency;
    private String stripeEmail;
    private String stripeToken;
}
