const miQR = require("qrcode-terminal");

// creamos un QR con ese texto

miQR.generate("https://es.linkedin.com/?src=go-pa&trk=sem-ga_campid.18146679037_asid.140850334975_crid.694860685343_kw.linkedin_d.c_tid.kwd-148086543_n.g_mt.e_geo.9198470&mcid=6968657504633266178&cid=&gad_source=1&gclid=CjwKCAjwm_SzBhAsEiwAXE2Cvz9LqehLsjFa2DCl_PZOPJkLIgmPcsdfJu19K2twfs8HJ1F3MLFULBoC1PcQAvD_BwE&gclsrc=aw.ds", {small:true});