package com.example.Ecommerce.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Product {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="product_id")


    private Long id;
    private int quantity;
    private double price;


    private String brand;
    private String category;
    private String name;
    private String image;
    private String description;
}
