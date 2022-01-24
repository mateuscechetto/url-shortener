package com.zg.UrlShortener.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zg.UrlShortener.model.Url;
import com.zg.UrlShortener.repository.UrlRepository;

@Service
public class UrlShortnerService {
	
	final char[] charSet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".toCharArray();

	private UrlRepository urlRepository;
	
	@Autowired
	public UrlShortnerService(UrlRepository urlRepository) {
		this.urlRepository = urlRepository;
	}
	
	public String generateShortUrl(String originalUrl) {
		Url urlToPersist = new Url(originalUrl);
		Url persistedUrl = persistUrl(urlToPersist);
		//cache
		String shortUrl = encodeUrl(persistedUrl.getId());
		return shortUrl;
		
	}
	
	public Url persistUrl(Url url) {
		Url persistedUrl = urlRepository.save(url);
		return persistedUrl;
	}
	
	
	public String getOriginalUrl(String shortUrl) {
		//cache
		int urlID = decodeUrl(shortUrl);
		Url originalUrl = getById(urlID);
		return originalUrl.getOriginalUrl();
		
	}
	
	
	private Url getById(int urlID) {
		return urlRepository.getById(urlID);
	}
	
	public String encodeUrl(int counter) {
		StringBuilder shortUrl = new StringBuilder();
		while(counter > 0) {
			shortUrl.append(this.charSet[counter % 62]);
			counter = counter / 62;
		}
		return shortUrl.reverse().toString();
	}
	
	public int decodeUrl(String shortUrl) {
		int decode = 0;
		for(int i = 0; i < shortUrl.length(); i++) {
			decode = decode * 62 + base62(shortUrl.charAt(i));
		}
		return decode;	
	}
	
	private int base62(char c) {
        if (c >= '0' && c <= '9') return c - '0';
        else if (c >= 'a' && c <= 'z') return c - 'a' + 10;
        else if (c >= 'A' && c <= 'Z') return c - 'A' + 36;
        else return 0;
    }
	
}
