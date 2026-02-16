package com.anand.Bookstore.repository;

import com.anand.Bookstore.entity.Book;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface BookRepository extends CrudRepository<Book, UUID> {

}
