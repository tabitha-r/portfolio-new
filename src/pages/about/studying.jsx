import React from 'react';
import {ReactComponent as Express} from '../../images/devicon/express-original.svg';
import {ReactComponent as Firebase} from '../../images/devicon/firebase-plain.svg';
import {ReactComponent as Jquery} from '../../images/devicon/jquery-plain.svg';
import {ReactComponent as Mongodb} from '../../images/devicon/mongodb-original.svg';
import {ReactComponent as Mysql} from '../../images/devicon/mysql-plain.svg';
import {ReactComponent as Nextjs} from '../../images/devicon/nextjs-original.svg';
import {ReactComponent as Postgresql} from '../../images/devicon/postgresql-plain.svg';
import {ReactComponent as Python} from '../../images/devicon/python-original.svg';
import {ReactComponent as Ruby} from '../../images/devicon/ruby-plain.svg';
import {ReactComponent as Typescript} from '../../images/devicon/typescript-plain.svg';
import {ReactComponent as Webpack} from '../../images/devicon/webpack-original.svg';

const StudyingIcons = () => {
    
    return (
        <div className="studyingIcons">
            <a
                href="https://expressjs.com/"
                target="_blank"
                rel="noreferrer"
            >
                <abbr title="Express.js"><Express className="devIcon" /></abbr>
            </a>
            <a
                href="https://www.postgresql.org/"
                target="_blank"
                rel="noreferrer"
            >
                <abbr title="PostgreSQL"><Postgresql className="devIcon" /></abbr>
            </a>
            <a
                href="https://jquery.com/"
                target="_blank"
                rel="noreferrer"
            >
                <abbr title="jQuery"><Jquery className="devIcon" /></abbr>
            </a>
            <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noreferrer"
            >
                <abbr title="TypeScript"><Typescript className="devIcon" /></abbr>
            </a>
            <a
                href="https://webpack.js.org/"
                target="_blank"
                rel="noreferrer"
            >
                <abbr title="Webpack"><Webpack className="devIcon" /></abbr>
            </a>
            <a
                href="https://nextjs.org/"
                target="_blank"
                rel="noreferrer"
            >
                <abbr title="Next.js"><Nextjs className="devIcon" /></abbr>
            </a>
            <a
                href="https://firebase.google.com/"
                target="_blank"
                rel="noreferrer"
            >
                <abbr title="Firebase"><Firebase className="devIcon" /></abbr>
            </a>
            <a
                href="https://www.mongodb.com/"
                target="_blank"
                rel="noreferrer"
            >
                <abbr title="mongoDb"><Mongodb className="devIcon" /></abbr>
            </a>
            <a
                href="https://www.mysql.com/"
                target="_blank"
                rel="noreferrer"
            >
                <abbr title="MySQL"><Mysql className="devIcon" /></abbr>
            </a>
            <a
                href="https://www.python.org/"
                target="_blank"
                rel="noreferrer"
            >
                <abbr title="Python"><Python className="devIcon" /></abbr>
            </a>
            <a
                href="https://www.ruby-lang.org/en/"
                target="_blank"
                rel="noreferrer"
            >
                <abbr title="Ruby"><Ruby className="devIcon" /></abbr>
            </a>
        </div>
    )
}

export default StudyingIcons;