interface queryInterface_score{
    createTable: (arg0: string, arg1: { score_id: { type: any; allowNull: boolean; primaryKey: boolean; }; time: { type: any; allowNull: boolean; }}) => any;
    dropTable: (arg0: string) => any;
}

interface queryInterface_user{
    createTable: (arg0: string, arg1: { user_id: { type: any; allowNull: boolean; primaryKey: boolean; }; username: { type: any; allowNull: boolean; }; password: { type: any; allowNull: boolean; }; }) => any;
    dropTable: (arg0: string) => any;
}

interface queryInterface_user_id{
    addColumn: (arg0: string, arg1: string, arg2: { type: any; allowNull: boolean; references: { model: { tableName: string; schema: string; }; key: string; }; onUpdate: string; onDelete: string; }) => any;
    removeColumn: (arg0: string, arg1: string, arg2: {}) => any;
}

interface Sequelize{
    INTEGER: any; 
    STRING: any;
}