package com.example.Ecommerce.controllers;

import com.example.Ecommerce.model.Product;
import com.example.Ecommerce.service.ProductService;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Data
@Controller
@ControllerAdvice
public class MainController {

    @Autowired
    ProductService productService;


    // Allows us to nav to the home page
    @GetMapping("/")
    public String main(){
        return "home";
    }

    // allows us to get a list of all the products
    @ModelAttribute("products")
    public List<Product> products(){
        return productService.findAll();
    }

    // List of the categories
    @ModelAttribute("categories")
    public List<String> categories(){
        return productService.findDistinctCategories();
    }
    // list of the brands
    @ModelAttribute("brands")
    public List <String> brands(){
        return productService.findDistinctBrands();
    }
    // filter through the list
    @GetMapping("/filter")
    public String filter(@RequestParam(required = false) String category,
                         @RequestParam(required = false) String brand, Model model){
        List<Product> filtered = productService.findByBrandAndCategory(brand, category);
        model.addAttribute("products", filtered);

        return "home";
    }
    // gets the About page to display
    @GetMapping("/about")
    public String about(){
        return "about";
    }

}
