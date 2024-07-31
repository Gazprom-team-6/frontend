export type Option = {
  value: string;
  label: string;
};

type Pagination = {
  page: number;
  per_page: number;
  total_items: number;
  total_pages: number;
};

type User = {
  id: number;
  username: string;
  name: string;
  email: string;
};

export type GetUserList = {
  data: User[];
  meta: Pagination;
  error?: string;
};

type ProjectDetail = {
  id: number;
  name: string;
  isCodeFreeze: boolean;
  servicesCount?: number;
};

export type GetProjectList = {
  data: ProjectDetail[];
  meta: Pagination;
  error?: string;
};

export type ServiceTableFilters = {
  name?: string;
  tier?: string;
  owner?: string;
  tags?: string;
  link?: string;
};

export type ServiceTablePagination = {
  current?: number;
  pageSize?: number;
  total?: number;
};

export type PostServiceListParams = {
  filters: ServiceTableFilters;
  pagination: ServiceTablePagination;
};

export type ServiceOwner = {
  email: string;
  name: string;
};

export type ServiceShort = {
  id: number;
  name: string;
  description?: string;
  isCodeFreeze: boolean;
  projectId: number;
  repositoryId: number;
  tier?: number;
};

export type PostServiceListResponse = {
  data: ServiceShort[];
  meta: Pagination;
  error?: string;
};

type PaginationRequest = {
  page: number;
  per_page: number;
};

export type ConfigFilter = {
  configFieldComparisonOperator: string;
  configFieldJsonPath: string;
  configFieldValue: string;
  configFieldValueType: 'string' | 'number' | 'bool' | 'array';
};

type FiltersRequest = {
  name?: string;
  config?: ConfigFilter[];
};

export type PostServiceListRequest = {
  filters?: FiltersRequest;
  pagination: PaginationRequest;
};

type ServiceLink = {
  name: string;
  type: string;
  url: string;
};

type ServiceDetail = {
  description?: string;
  engine?: string;
  id?: number;
  isCodeFreeze?: boolean;
  links?: ServiceLink[];
  name?: string;
  owner?: ServiceOwner;
  'owner-backup'?: ServiceOwner;
  projectId?: number;
  repositoryId?: number;
  status?: string;
  tags?: string[];
  tier?: number;
};

export type GetServiceDetail = {
  data: ServiceDetail;
  error?: string;
};

export type MetricCriterion = {
  comparator?: string;
  compareValue?: string | string[];
  metricSlug?: string;
  result?: boolean;
  value?: string | string[] | null;
  weight: number;
};

type PersistentScore = {
  id: string;
  name: string;
  description: string;
  criteria: MetricCriterion[];
  entity_id: string;
  entity_type: string;
  isAdditional?: boolean;
  result?: number;
};

export type PostPersistentScoreResponse = {
  data: PersistentScore;
  error?: string;
};

export type GetPersistentScoreList = {
  data: PersistentScore[];
  meta: Pagination;
  error?: string;
};

type DataSource = {
  id: number;
  name: string;
  type: string;
  project_id: number;
};

export type PostDataSourceResponse = {
  data: DataSource;
  error?: string;
};

export type GetDataSourceList = {
  data: DataSource[];
  meta: Pagination;
  error?: string;
};

export type PostDataSourceRequest = {
  name: string;
  type: string;
  url: string;
  username: string;
  password: string;
};

type PersistentScoreMetric = {
  slug: string;
  query?: string;
  source_id?: number;
};

export type PersistentScoreCriterion = {
  metric: PersistentScoreMetric;
  comparator: string;
  compareValue?: string | number | boolean;
  weight: number;
};

export type PostPersistentScoreRequest = {
  criteria: PersistentScoreCriterion[];
  description: string;
  name: string;
};

export type PersistentScoreData = {
  manifest: PersistentScoreCriterion[];
  quality: PersistentScoreCriterion[];
  sequel: PersistentScoreCriterion[];
  description: string;
  name: string;
};

type CodefreezeListItem = {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  description: string;
  servicesCount: number;
  codeFreeze: boolean;
};

export type GetCodefreezeList = {
  data: CodefreezeListItem[];
  meta: Pagination;
  error?: string;
};

export type CodefreezeService = {
  id: number;
  name: string;
  code_freeze: boolean;
  project_id: number;
};

type CodefreezeDetail = {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  description: string;
  servicesCount: number;
  codeFreeze: boolean;
  services: CodefreezeService[];
};

export type GetCodefreezeDetail = {
  data: CodefreezeDetail;
  error?: string;
};

export type PostCodefreezeRequest = {
  name: string;
  description: string;
  servicesIds: number[];
};

type Template = {
  templateId: number;
  templateName: string;
  templateDesc: string;
  templateGitUrl: string;
  templateGitBranch: string;
};

export type GetTemplateList = {
  data: Template[];
  meta: Pagination;
  error?: string;
};

export type TemplateQuestion = {
  type: 'select' | 'input' | 'radio';
  name: string;
  title: string;
  description: string;
  required: boolean;
  options?: Option[];
};

export type GetTemplateDetail = {
  data: {
    title: string;
    questions: TemplateQuestion[];
  };
  error?: string;
};

export type PostTemplateRequest = Template;

export type PostTemplateResponse = {
  data: Template;
  error?: string;
  meta: Pagination;
};

export type PostScaffoldRequest = {
  projectId: number;
  repositoryName: string;
  templateId: number;
  namespace: string;
  ownerId: number;
  answers: Record<string, string>;
};

export type PostScaffoldResponse = {
  projectId: number;
};
