package com.zoomlion.hjsrm.clib.util;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.zip.ZipFile;

import com.eos.system.utility.ZipUtil;
/**
 * **************************************************
 * 描    述：  封装 ZipUtil
 * @author   bingyu
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-29 bingyu 创建文件
 * **************************************************
 */
public class SrmZip {
	
	/**
	 * 方法描述: 压缩文件
	 * @author bingyu
	 * @param inputFile
	 * @param outputFile
	 * @throws IOException 
	 * @return void
	 */
	public static void zip(File inputFile, File outputFile)throws IOException {
		ZipUtil.zip(inputFile, outputFile);
	}
	
	/**
	 * 方法描述: 解压文件
	 * @author bingyu
	 * @param zipFilename
	 * @param outputDirectory
	 * @throws IOException 
	 * @return void
	 */
	public static void unzip(File zipFilename, File outputDirectory)throws IOException {
		ZipUtil.unzip(zipFilename, outputDirectory);
	}
	
	/**
	 * 方法描述: 统计压缩文件中文件总数
	 * @author bingyu
	 * @param zipFilename
	 * @return 
	 * @return int
	 */
	public static int countOfZip(File zipFilename) {
		return ZipUtil.countOfZip(zipFilename);
	}
	
	/**
	 * 方法描述: 解压文件到dir
	 * @author bingyu
	 * @param zipfilepath
	 * @param toDir
	 * @param includesPattern
	 * @param excludsPattern 
	 * @return void
	 */
	@Deprecated
	public static void unzip2Dir(String zipfilepath, String toDir, String includesPattern, String excludsPattern) {
		ZipUtil.unzip2Dir(zipfilepath, toDir, includesPattern, excludsPattern);
	}
	
	/**
	 * 方法描述: 解压文件到dri
	 * @author bingyu
	 * @param zipfilepath
	 * @param toDir
	 * @param includesPattern
	 * @param excludsPattern
	 * @param keepDir
	 * @param overwrite 
	 * @return void
	 */
	@Deprecated
	public static void unzip2Dir(String zipfilepath, String toDir, String includesPattern, String excludsPattern, boolean keepDir, boolean overwrite){
		ZipUtil.unzip2Dir(zipfilepath, toDir, includesPattern, excludsPattern, keepDir, overwrite);
	}
	
	/**
	 * 方法描述: close 压缩Stream
	 * @author bingyu
	 * @param zipFile 
	 * @return void
	 */
	public static void close(ZipFile zipFile) {
		ZipUtil.closeQuietly(zipFile);
	}
	
	/**
	 * 方法描述: 添加文件到压缩文件
	 * @author bingyu
	 * @param zipFilepath
	 * @param srcDir
	 * @param includesPattern
	 * @param excludsPattern
	 * @throws FileNotFoundException 
	 * @return void
	 */
	public static void addFilesToZip(String zipFilepath, String srcDir, String includesPattern, String excludsPattern)throws FileNotFoundException {
		ZipUtil.addFilesToZip(zipFilepath, srcDir, includesPattern, excludsPattern);
	}
}
