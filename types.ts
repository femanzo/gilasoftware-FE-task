export type Profile = {
  id: string;
  firstName: string;
  lastName: string;
  type: "client" | "contractor";
  profession: string;
  balance: number;
  contracts: Contract[];
};

export type Contract = {
  id: string;
  terms: string;
  status: string;
  ClientId: number;
  ContractorId: number;
  createdAt: string;
  updatedAt: string;
  client: Profile;
  contractor: Profile;
  jobs: Job[];
};

export type Job = {
  id: string;
  description: string;
  price: number;
  paid: boolean;
  paymentDate: string;
  ContractId: number;
  contract: Contract;
  createdAt: string;
  updatedAt: string;
};

export type BestPayingClient = {
  id: string;
  fullName: string;
  paid: number;
};

export type BestProfession = {
  profession: string;
  totalEarnings: number;
};
