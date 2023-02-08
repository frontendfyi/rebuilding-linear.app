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
      user_db: {
        Row: {
          id: string;
          created_at: string;
          user_email: string;
          user_name: string | null;
          //   content: string;
          user_id: string;
        };
        Insert: {
          id?: string;
          created_at?: string;
          //      content: string;
          user_email?: string;
          user_name?: string;
          user_id?: string;
        };
        Update: {
          id?: string;
          created_at?: string;
          //      content?: string;
          user_email?: string;
          user_name?: string;
          user_id?: string;
        };
        Upsert: {
          id?: string;
          created_at?: string;
          user_email?: string;
          user_name?: string;
          user_id?: string;
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
  };
}
