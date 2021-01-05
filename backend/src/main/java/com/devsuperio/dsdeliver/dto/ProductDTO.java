package com.devsuperio.dsdeliver.dto;

import java.io.Serializable;

import com.devsuperio.dsdeliver.entities.Product;

public class ProductDTO implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String name;
	private Double price;
	private String description;
	private String imageYri;
	
	public ProductDTO() {
		
	}

	public ProductDTO(Long id, String name, Double price, String description, String imageYri) {
		super();
		this.id = id;
		this.name = name;
		this.price = price;
		this.description = description;
		this.imageYri = imageYri;
	}
	
	public ProductDTO(Product entity) {
		id = entity.getId();
		name = entity.getName();
		price = entity.getPrice();
		description = entity.getDescription();
		imageYri = entity.getImageUri();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getImageYri() {
		return imageYri;
	}

	public void setImageYri(String imageYri) {
		this.imageYri = imageYri;
	}
	
	
	
	

}
