package com.zoomlion.hjsrm.db;
import java.lang.reflect.Array;

public class DataUtil {
	@SuppressWarnings("unchecked")
	public static <T> T[] castArray(Class<T> componentType, Object[] dataObjects)
	  {
		Object[] ts = (Object[])(Object[])Array.newInstance(componentType, dataObjects.length);
	    try {
	      System.arraycopy(dataObjects, 0, ts, 0, dataObjects.length);
	    }
	    catch (ArrayStoreException ase) {
	      String sourceClassName = "";
	      if ((dataObjects != null) && (dataObjects.length > 0) && (dataObjects[0] != null)) {
	        sourceClassName = dataObjects[0].getClass().getName();
	      }
	      throw new RuntimeException("*BaseDao*Can't convert class \"" + sourceClassName + "\" to \"" + componentType.getName() + "\".");
	    }
	    return (T[])ts;
	  }
}
