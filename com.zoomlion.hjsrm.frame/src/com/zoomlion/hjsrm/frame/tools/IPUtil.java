package com.zoomlion.hjsrm.frame.tools;


import com.eos.system.annotation.Bizlet;
import com.eos.system.annotation.BizletParam;

/**
 * 
 * IP校验工具类
 *
 */

@Bizlet("IP操作运算逻辑")
public class IPUtil {
	
	private IPUtil(){
		//工具类不允许实例化
	}

	/**
	 * 判断sourceIP是否匹配targetIP，最后一个网段支持通配符*,?(*表示任意个任意字符,?表示一个任意字符)<BR>
	 * 如果匹配返回true,否则返回false.示例<BR>
	 * <pre>
	 * 调用：isMatchWildcard("192.168.0.*", "192.168.0.122")返回true
	 *      isMatchWildcard("192.168.0.?1", "192.168.0.21"),返回true
	 *      isMatchWildcard("192.168.0.?1?", "192.168.0.11"),返回false
	 * </pre>
	 * @param sourceIp 待比较的源IP地址
	 * @param targetIp 目标IP地址
	 * @return
	 */
	@Bizlet(
		value="判断sourceIP是否匹配targetIP，支持最后一个网段通配符*,?",
		params = { 
			@BizletParam(index = 0, paramAlias = "sourceIP"),
			@BizletParam(index = 1, paramAlias = "targetIP") 
		}
	)
	public static boolean isMatchWildcard(String sourceIP, String targetIP) {
		
		//判断sourceIP与targetIP的前三位是否相等
		if( !targetIP.startsWith(sourceIP.substring(0,sourceIP.lastIndexOf("."))) )
			return false;

		String sourceLastMask=sourceIP.substring(sourceIP.lastIndexOf(".")+1);
		String targetLastMask=targetIP.substring(targetIP.lastIndexOf(".")+1);
		
		if( sourceLastMask.equals(targetLastMask) )
			return true;
		
		switch (sourceLastMask.length()) {//按照匹配IP的位数进行分组
		
		//sourceLastMask只有一位的情况
		case 1:	{	
			if( sourceLastMask.equals("*") ) //sourceLastMask==*，无需校验，返回成功
				return true;
			else if( sourceLastMask.equals("?") ) { //当sourceLastMask==？，要求targetLastMask的长度必须为1位
				if( targetLastMask.length()==1 )
					return true;
				else 
					return false;
			} else
				return false;
			
		}

		//sourceLastMask有两位的情况
		case 2: {
			if( sourceLastMask.equals("**") 
					|| sourceLastMask.equals("*?") 
					|| sourceLastMask.equals("?*") ) //当sourceLastMask==**|*?|?*，无需校验，返回成功
				return true;
			else if(sourceLastMask.equals("??")) {
				if( targetLastMask.length() == 2 )
					return true;
				else
					return false;
			}
			else if( sourceLastMask.startsWith("*") ) { //当sourceLastMask==*n
				String n = sourceLastMask.substring(1);
				return targetLastMask.endsWith(n);
			}
			else if( sourceLastMask.endsWith("*") ) { //当sourceLastMask==n*
				String n = sourceLastMask.substring(0,1);
				return targetLastMask.startsWith(n);
			}
			else if( sourceLastMask.startsWith("?") ) { //当sourceLastMask==?n
				String n = sourceLastMask.substring(1);
				return targetLastMask.length()==2 && targetLastMask.endsWith(n);
			}
			else if( sourceLastMask.endsWith("?") ) { //当sourceLastMask==n?
				String n = sourceLastMask.substring(0,1);
				return targetLastMask.length()==2 && targetLastMask.startsWith(n);
			}
			else 
				return false;

		}

		//sourceLastMask有三位的情况
		case 3:
			String s1 = sourceLastMask.substring(0, 1);
			String s2 = sourceLastMask.substring(1, 2);
			String s3 = sourceLastMask.substring(2, 3);
			
			if( sourceLastMask.equals("***") 
					|| sourceLastMask.equals("**?") 
					|| sourceLastMask.equals("*?*") 
					|| sourceLastMask.equals("?**")) 
				//当sourceLastMask==***|**?|*?*|?**，无需校验，返回成功
				return true;
			
			else if( sourceLastMask.equals("??*") 
					|| sourceLastMask.equals("?*?") 
					|| sourceLastMask.equals("*??")) { //当sourceLastMask==??*|?*?|*??
				//targetLastMask的位数>2，返回成功
				if( targetLastMask.length()>=2 )
					return true;
				
			} else if( sourceLastMask.equals("???") ) { //当sourceLastMask==???
				//targetLastMask的位数＝3，返回成功
				if( targetLastMask.length()==3 )
					return true;
			} 
			
			//出现两个*的情况
			else if( s1.equals("*") && s2.equals("*") ) {	 //当sourceLastMask==**n
				//只要targetLastMask中包含s3，校验成功
				if( targetLastMask.endsWith(s3) )
					return true;
			} else if( s1.equals("*") && s3.equals("*") ) { //当sourceLastMask==*n*
				//只要targetLastMask中包含s2，校验成功
				if( targetLastMask.indexOf(s2)>-1 )
					return true;
			} else if( s2.equals("*") && s3.equals("*") ) { //当sourceLastMask==n**
				//只要targetLastMask中包含s1，校验成功
				if( targetLastMask.startsWith(s1) )
					return true;
			}
			
			//出现两个?的情况
			else if( s1.equals("?") && s2.equals("?") ) {	 //当sourceLastMask==??n
				if( targetLastMask.length()==3 && targetLastMask.endsWith(s3) )
					return true;
			} else if( s1.equals("?") && s3.equals("?") ) { //当sourceLastMask==?n?
				if( targetLastMask.length()==3 && targetLastMask.substring(1, 2).equals(s2) )
					return true;
			} else if( s2.equals("?") && s3.equals("?") ) { //当sourceLastMask==n??
				if( targetLastMask.length()==3 && targetLastMask.startsWith(s1) )
					return true;
			} 
			
			//出现一个?+一个*的情况
			else if( s1.equals("*") && s2.equals("?") ) {	 //当sourceLastMask==*?n
				if( targetLastMask.length()>=2 && targetLastMask.endsWith(s3) )
					return true;
			} else if( s1.equals("?") && s2.equals("*") ) { //当sourceLastMask==?*n
				if( targetLastMask.length()>=2 && targetLastMask.endsWith(s3) )
					return true;
			} else if( s1.equals("*") && s3.equals("?") ) { //当sourceLastMask==*n?
				String n = targetLastMask.substring(0,targetLastMask.length()-1);
				if( n.endsWith(s2))
					return true;
			} else if( s1.equals("?") && s3.equals("*") ) { //当sourceLastMask==?n*
				String n = targetLastMask.substring(1);
				if( n.startsWith(s2) )
					return true;
			} else if( s2.equals("*") && s3.equals("?") ) { //当sourceLastMask==n*?
				if( targetLastMask.length()>=2 && targetLastMask.startsWith(s1) )
					return true;
			} else if( s2.equals("?") && s3.equals("*") ) { //当sourceLastMask==n?*
				if( targetLastMask.length()>=2 && targetLastMask.startsWith(s1) )
					return true;
			}
			
			//出现一个*的情况
			else if( s1.equals("*") ) { //当sourceLastMask==*mn
				if( targetLastMask.endsWith(s2+s3) )
					return true;
			} else if( s2.equals("*") ) { //当sourceLastMask==m*n
				if( targetLastMask.startsWith(s1) &&  targetLastMask.endsWith(s3))
					return true;
			} else if( s3.equals("*") ) { //当sourceLastMask==mn*
				if( targetLastMask.startsWith(s1+s2) )
					return true;
			}

			//出现一个?的情况
			else if( s1.equals("?") ) { //当sourceLastMask==?mn
				if( targetLastMask.length()==3 && targetLastMask.endsWith(s2+s3) )
					return true;
			} else if( s2.equals("?") ) { //当sourceLastMask==m?n
				if( targetLastMask.length()==3 && targetLastMask.startsWith(s1) &&  targetLastMask.endsWith(s3))
					return true;
			} else if( s3.equals("?") ) { //当sourceLastMask==mn?
				if( targetLastMask.length()==3 && targetLastMask.startsWith(s1+s2) )
					return true;
			}	
			
		}
		
		return false;	
	}

}
