package com.anand.Bookstore.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.UUID;

@Entity
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "UUID"
    )
    private UUID id;

    @Column
    private String title;

    @Column
     private String description;

    @Column
    private int releaseYear;

    @Column
    private int pages;

}
