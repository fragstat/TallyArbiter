export interface Source {
    name: string;
    connected: boolean;
    enabled: boolean;
    id: string;
    reconnect: boolean;
    sourceTypeId: string;
    data: Record<string, any>;

    // Volatile
	cloudClientId?: any;
    cloudConnection?: boolean;
    sourceTypeName?: string;
}