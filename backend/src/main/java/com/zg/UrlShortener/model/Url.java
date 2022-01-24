package com.zg.UrlShortener.model;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table
public class Url {
	
	@Id
	@SequenceGenerator(name = "idSequence", sequenceName = "idSequence", allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "idSequence")
	private int id;
	private String originalUrl;
	//private String shortUrl;
	
	public Url() {
		
	}
	
	public Url(String originalUrl) {
		//this.id = id;
		this.originalUrl = originalUrl;
		//this.shortUrl = shortUrl;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getOriginalUrl() {
		return originalUrl;
	}
	public void setOriginalUrl(String originalUrl) {
		this.originalUrl = originalUrl;
	}
	/*public String getShortUrl() {
		return shortUrl;
	}
	public void setShortUrl(String shortUrl) {
		this.shortUrl = shortUrl;
	}
	*/
	@Override
	public String toString() {
		return "Url [id=" + id + ", originalUrl=" + originalUrl + 
				//", shortUrl=" + shortUrl + 
				"]";
	}
	
	

}
