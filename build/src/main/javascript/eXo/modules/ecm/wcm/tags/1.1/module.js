eXo.require("eXo.projects.Module") ;
eXo.require("eXo.projects.Product") ;

function getModule(params) {

  var kernel = params.kernel;
  var core = params.core;
  var ws = params.ws;
  var eXoPortletContainer = params.eXoPortletContainer;
  var jcr = params.eXoJcr;
  var portal = params.portal;
  var dms = params.dms;  
  
  var module = new Module();

  module.version = "1.1" ;
  module.relativeMavenRepo =  "org/exoplatform/ecm/wcm" ;
  module.relativeSRCRepo =  "ecm/wcm/tags/1.1" ;
  module.name =  "wcm" ;
  
  module.portlet = {};
  
  module.portlet.webpresentation = 
    new Project("org.exoplatform.ecm.wcm", "exo.ecm.wcm.portlet.web-presentation", "exo-portlet", module.version).       
    addDependency(new Project("org.exoplatform.ecm.wcm", "exo.ecm.wcm.connector.fckeditor", "jar",  module.version)).
    addDependency(new Project("org.exoplatform.ecm.wcm", "exo.ecm.wcm.component.wcm", "jar",  module.version)).
    addDependency(new Project("org.exoplatform.ecm.wcm", "exo.ecm.wcm.webui.wcm", "jar",  module.version)).
    addDependency(new Project("org.exoplatform.ecm.wcm", "exo.ecm.wcm.component.publication", "jar",  module.version)).    
    addDependency(ws.frameworks.json) .
    addDependency(jcr.frameworks.command) .
    addDependency(jcr.frameworks.web).
    addDependency(portal.webui.portal);
    
 module.portlet.websearches = 
    new Project("org.exoplatform.ecm.wcm", "exo.ecm.wcm.portlet.web-searches", "exo-portlet", module.version).    
    addDependency(new Project("org.exoplatform.ecm.wcm", "exo.ecm.wcm.component.wcm", "jar",  module.version)).
    addDependency(new Project("org.exoplatform.ecm.wcm", "exo.ecm.wcm.component.search", "jar",  module.version));
    
  module.web = {};
  module.web.eXoWCMResources = 
    new Project("org.exoplatform.ecm.wcm", "exo.ecm.wcm.web.eXoWCMResources", "war", module.version).
    addDependency(portal.web.eXoResources) .
    addDependency(portal.web.eXoMacSkin) .
    addDependency(portal.web.eXoVistaSkin);
        
  module.web.wcmportal = 
    new Project("org.exoplatform.ecm.wcm", "exo.ecm.wcm.web.portal", "exo-portal", module.version);
    
  return module;
}
