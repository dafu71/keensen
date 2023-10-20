package com.zoomlion.hjsrm.core.exception;


public class BusinessException extends Exception {

	private static final long serialVersionUID = 8109303352556055331L;

	public BusinessException(String title,String message) {
		super(message);
		super.printStackTrace();
		this.message = message;
		this.title = title;
	}

	private String message;
	private String title;

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}


	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

}
