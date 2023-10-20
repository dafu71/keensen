/**
 * PasswordManagerServiceLocator.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.3 Oct 05, 2005 (05:23:37 EDT) WSDL2Java emitter.
 */

package com.primeton.www.PasswordManager;

public class PasswordManagerServiceLocator extends org.apache.axis.client.Service implements com.primeton.www.PasswordManager.PasswordManagerService {

    public PasswordManagerServiceLocator() {
    }


    public PasswordManagerServiceLocator(org.apache.axis.EngineConfiguration config) {
        super(config);
    }

    public PasswordManagerServiceLocator(java.lang.String wsdlLoc, javax.xml.namespace.QName sName) throws javax.xml.rpc.ServiceException {
        super(wsdlLoc, sName);
    }

    // Use to get a proxy class for PasswordManagerPort
    private java.lang.String PasswordManagerPort_address = "http://10.87.225.2:8080/eos-default/PasswordManager";

    public java.lang.String getPasswordManagerPortAddress() {
        return PasswordManagerPort_address;
    }

    // The WSDD service name defaults to the port name.
    private java.lang.String PasswordManagerPortWSDDServiceName = "PasswordManagerPort";

    public java.lang.String getPasswordManagerPortWSDDServiceName() {
        return PasswordManagerPortWSDDServiceName;
    }

    public void setPasswordManagerPortWSDDServiceName(java.lang.String name) {
        PasswordManagerPortWSDDServiceName = name;
    }

    public com.primeton.www.PasswordManager.PasswordManager getPasswordManagerPort() throws javax.xml.rpc.ServiceException {
       java.net.URL endpoint;
        try {
            endpoint = new java.net.URL(PasswordManagerPort_address);
        }
        catch (java.net.MalformedURLException e) {
            throw new javax.xml.rpc.ServiceException(e);
        }
        return getPasswordManagerPort(endpoint);
    }

    public com.primeton.www.PasswordManager.PasswordManager getPasswordManagerPort(java.net.URL portAddress) throws javax.xml.rpc.ServiceException {
        try {
            com.primeton.www.PasswordManager.PasswordManagerBindingStub _stub = new com.primeton.www.PasswordManager.PasswordManagerBindingStub(portAddress, this);
            _stub.setPortName(getPasswordManagerPortWSDDServiceName());
            return _stub;
        }
        catch (org.apache.axis.AxisFault e) {
            return null;
        }
    }

    public void setPasswordManagerPortEndpointAddress(java.lang.String address) {
        PasswordManagerPort_address = address;
    }

    /**
     * For the given interface, get the stub implementation.
     * If this service has no port for the given interface,
     * then ServiceException is thrown.
     */
    public java.rmi.Remote getPort(Class serviceEndpointInterface) throws javax.xml.rpc.ServiceException {
        try {
            if (com.primeton.www.PasswordManager.PasswordManager.class.isAssignableFrom(serviceEndpointInterface)) {
                com.primeton.www.PasswordManager.PasswordManagerBindingStub _stub = new com.primeton.www.PasswordManager.PasswordManagerBindingStub(new java.net.URL(PasswordManagerPort_address), this);
                _stub.setPortName(getPasswordManagerPortWSDDServiceName());
                return _stub;
            }
        }
        catch (java.lang.Throwable t) {
            throw new javax.xml.rpc.ServiceException(t);
        }
        throw new javax.xml.rpc.ServiceException("There is no stub implementation for the interface:  " + (serviceEndpointInterface == null ? "null" : serviceEndpointInterface.getName()));
    }

    /**
     * For the given interface, get the stub implementation.
     * If this service has no port for the given interface,
     * then ServiceException is thrown.
     */
    public java.rmi.Remote getPort(javax.xml.namespace.QName portName, Class serviceEndpointInterface) throws javax.xml.rpc.ServiceException {
        if (portName == null) {
            return getPort(serviceEndpointInterface);
        }
        java.lang.String inputPortName = portName.getLocalPart();
        if ("PasswordManagerPort".equals(inputPortName)) {
            return getPasswordManagerPort();
        }
        else  {
            java.rmi.Remote _stub = getPort(serviceEndpointInterface);
            ((org.apache.axis.client.Stub) _stub).setPortName(portName);
            return _stub;
        }
    }

    public javax.xml.namespace.QName getServiceName() {
        return new javax.xml.namespace.QName("http://www.primeton.com/PasswordManager", "PasswordManagerService");
    }

    private java.util.HashSet ports = null;

    public java.util.Iterator getPorts() {
        if (ports == null) {
            ports = new java.util.HashSet();
            ports.add(new javax.xml.namespace.QName("http://www.primeton.com/PasswordManager", "PasswordManagerPort"));
        }
        return ports.iterator();
    }

    /**
    * Set the endpoint address for the specified port name.
    */
    public void setEndpointAddress(java.lang.String portName, java.lang.String address) throws javax.xml.rpc.ServiceException {
        
if ("PasswordManagerPort".equals(portName)) {
            setPasswordManagerPortEndpointAddress(address);
        }
        else 
{ // Unknown Port Name
            throw new javax.xml.rpc.ServiceException(" Cannot set Endpoint Address for Unknown Port" + portName);
        }
    }

    /**
    * Set the endpoint address for the specified port name.
    */
    public void setEndpointAddress(javax.xml.namespace.QName portName, java.lang.String address) throws javax.xml.rpc.ServiceException {
        setEndpointAddress(portName.getLocalPart(), address);
    }

}
