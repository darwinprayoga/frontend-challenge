export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      form: {
        Row: {
          id: number;
          created_at: string;
          name: string;
          sector: string;
          user_id: string;
          term: boolean;
          user: string;
        };
        Insert: {
          id?: number;
          created_at?: string;
          name?: string;
          sector?: string;
          user_id?: string;
          term?: boolean;
          user?: string;
        };
        Update: {
          id?: number;
          created_at?: string;
          name?: string;
          sector?: string;
          user_id?: string;
          term?: boolean;
          user?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
