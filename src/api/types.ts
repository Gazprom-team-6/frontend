export type option = {
  label: string;
  value: string;
}

type pagination = {
  page: number;
  per_page: number;
  total_items: number;
  total_pages: number;
}

type user = {
  email: string;
  id: number;
  name: string;
  username: string;
}

export type getuserlist = {
  data: user[];
  error?: string;
  meta: pagination;
}

type projectdetail = {
  id: number;
  iscodefreeze: boolean;
  name: string;
  servicescount?: number;
}

export type getprojectlist = {
  data: projectdetail[];
  error?: string;
  meta: pagination;
}

export type servicetablefilters = {
  link?: string;
  name?: string;
  owner?: string;
  tags?: string;
  tier?: string;
}

export type servicetablepagination = {
  current?: number;
  pagesize?: number;
  total?: number;
}

export type postservicelistparams = {
  filters: servicetablefilters;
  pagination: servicetablepagination;
}

export type serviceowner = {
  email: string;
  name: string;
}

export type serviceshort = {
  description?: string;
  id: number;
  iscodefreeze: boolean;
  name: string;
  projectid: number;
  repositoryid: number;
  tier?: number;
}

export type postservicelistresponse = {
  data: serviceshort[];
  error?: string;
  meta: pagination;
}

type paginationrequest = {
  page: number;
  per_page: number;
}

export type configfilter = {
  configfieldcomparisonoperator: string;
  configfieldjsonpath: string;
  configfieldvalue: string;
  configfieldvaluetype: "string" | "number" | "bool" | "array";
}

type filtersrequest = {
  config?: configfilter[];
  name?: string;
}

export type postservicelistrequest = {
  filters?: filtersrequest;
  pagination: paginationrequest;
}

type servicelink = {
  name: string;
  type: string;
  url: string;
}

type servicedetail = {
  'owner-backup'?: serviceowner;
  description?: string;
  engine?: string;
  id?: number;
  iscodefreeze?: boolean;
  links?: servicelink[];
  name?: string;
  owner?: serviceowner;
  projectid?: number;
  repositoryid?: number;
  status?: string;
  tags?: string[];
  tier?: number;
}

export type getservicedetail = {
  data: servicedetail;
  error?: string;
}

export type metriccriterion = {
  comparator?: string;
  comparevalue?: string | string[];
  metricslug?: string;
  result?: boolean;
  value?: string | string[] | null;
  weight: number;
}

type persistentscore = {
  criteria: metriccriterion[];
  description: string;
  entity_id: string;
  entity_type: string;
  id: string;
  isadditional?: boolean;
  name: string;
  result?: number;
}

export type postpersistentscoreresponse = {
  data: persistentscore;
  error?: string;
}

export type getpersistentscorelist = {
  data: persistentscore[];
  error?: string;
  meta: pagination;
}

type datasource = {
  id: number;
  name: string;
  project_id: number;
  type: string;
}

export type postdatasourceresponse = {
  data: datasource;
  error?: string;
}

export type getdatasourcelist = {
  data: datasource[];
  error?: string;
  meta: pagination;
}

export type postdatasourcerequest = {
  name: string;
  password: string;
  type: string;
  url: string;
  username: string;
}

type persistentscoremetric = {
  query?: string;
  slug: string;
  source_id?: number;
}

export type persistentscorecriterion = {
  comparator: string;
  comparevalue?: string | number | boolean;
  metric: persistentscoremetric;
  weight: number;
}

export type postpersistentscorerequest = {
  criteria: persistentscorecriterion[];
  description: string;
  name: string;
}

export type persistentscoredata = {
  description: string;
  manifest: persistentscorecriterion[];
  name: string;
  quality: persistentscorecriterion[];
  sequel: persistentscorecriterion[];
}

type codefreezelistitem = {
  codefreeze: boolean;
  createdat: string;
  description: string;
  id: string;
  name: string;
  servicescount: number;
  updatedat: string;
}

export type getcodefreezelist = {
  data: codefreezelistitem[];
  error?: string;
  meta: pagination;
}

export type codefreezeservice = {
  code_freeze: boolean;
  id: number;
  name: string;
  project_id: number;
}

type codefreezedetail = {
  codefreeze: boolean;
  createdat: string;
  description: string;
  id: string;
  name: string;
  services: codefreezeservice[];
  servicescount: number;
  updatedat: string;
}

export type getcodefreezedetail = {
  data: codefreezedetail;
  error?: string;
}

export type postcodefreezerequest = {
  description: string;
  name: string;
  servicesids: number[];
}

type template = {
  templatedesc: string;
  templategitbranch: string;
  templategiturl: string;
  templateid: number;
  templatename: string;
}

export type gettemplatelist = {
  data: template[];
  error?: string;
  meta: pagination;
}

export type templatequestion = {
  description: string;
  name: string;
  options?: option[];
  required: boolean;
  title: string;
  type: "select" | "input" | "radio";
}

export type gettemplatedetail = {
  data: {
    questions: templatequestion[];
    title: string;
  };
  error?: string;
}

export type PostTemplateRequest = Template

export type posttemplateresponse = {
  data: template;
  error?: string;
  meta: pagination;
}

export type postscaffoldrequest = {
  answers: record<string, string>;
  namespace: string;
  ownerid: number;
  projectid: number;
  repositoryname: string;
  templateid: number;
}

export type postscaffoldresponse = {
  projectid: number;
}
