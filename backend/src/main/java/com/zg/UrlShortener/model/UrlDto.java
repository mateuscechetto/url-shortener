package com.zg.UrlShortener.model;

public class UrlDto {
	
	private String url;
	
	public UrlDto() {
		
	}
	
	public UrlDto(String url) {
		this.url = url;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

}
