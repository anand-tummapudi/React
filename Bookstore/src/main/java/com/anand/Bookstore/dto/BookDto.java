package com.anand.Bookstore.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BookDto {

    @Builder.Default
    private String title = "Unknown Title";

    @Builder.Default
    private int pages = 100;

    @Builder.Default
    private boolean available = true;

    @Builder.Default
    private List<String> tags = new ArrayList<>();

}
