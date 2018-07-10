/**
 * 数据源配置，使用sequelize库
 */
const sequelize = require('sequelize');
const config = {
    database: 'lx',
    userName: 'root',
    password: 'root',
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
};

const datasourcePool = new Sequelize(config.database, config.userName, config.password, {
    host: config.host,
    dialect: config.dialect,
    pool: config.pool
});

function defineModel (name, attributes) {
    let attrs = {};

    for (let key in attributes) {
        let value = attributes[key];
        if (typeof value === 'object' && value['type']) {
            value.allowNull = value.allowNull || false;
            attrs[key] = value;
        } else {
            attrs[key] = {
                type: value,
                allowNull: false
            };
        }
    }

    attrs.createAt = {
        type: Sequelize.BIGINT,
        allowNull: false
    };
    attrs.updateAt = {
        type: Sequelize.BIGINT,
        allowNull: false
    };
    attrs.version = {
        type: Sequelize.BIGINT,
        allowNull: false
    };
    attrs.status = {
        type: Sequelize.INTEGER,
        allowNull: false
    };

    return datasourcePool.define(name, attrs, {
        tableName: name,
        timestamps: false,
        hooks: {
            beforeValidate: function (obj) {
                let now = Date.now();
                if (obj.isNewRecord) {
                    obj.createAt = now;
                    obj.updateAt = now;
                    obj.version = 0;
                } else {
                    obj.updateAt = now;
                    ++obj.version;
                }
            }
        }
    });
}