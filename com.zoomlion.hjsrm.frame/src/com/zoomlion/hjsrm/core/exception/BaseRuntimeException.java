package com.zoomlion.hjsrm.core.exception;

public class BaseRuntimeException extends RuntimeException {
	private static final long serialVersionUID = 1L;

	public BaseRuntimeException() {
	}

	public BaseRuntimeException(String message) {
		super(message);
	}

	public BaseRuntimeException(String message, Throwable cause) {
		super(message, cause);
	}

	public BaseRuntimeException(Throwable cause) {
		super(cause);
	}
}