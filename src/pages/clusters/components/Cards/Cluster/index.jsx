/*
 * This file is part of KubeSphere Console.
 * Copyright (C) 2019 The KubeSphere Console Authors.
 *
 * KubeSphere Console is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * KubeSphere Console is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with KubeSphere Console.  If not, see <https://www.gnu.org/licenses/>.
 */

import React from 'react'
import { Icon, Columns, Column } from '@pitrix/lego-ui'
import { Text, Indicator } from 'components/Base'
import { getLocalTime } from 'utils'

import styles from './index.scss'

export default class ClusterCard extends React.Component {
  handleClick = () => {
    const { data, onEnter } = this.props
    onEnter && onEnter(data.name)
  }

  render() {
    const { data } = this.props

    return (
      <li className={styles.wrapper} data-test="cluster-item">
        <Columns>
          <Column className="is-narrow">
            <div className={styles.icon}>
              <Icon name={data.icon || 'kubernetes'} size={40} />
              <Indicator className={styles.indicator} status={data.status} />
            </div>
          </Column>
          <Column className="is-4">
            <div className="width-full">
              <div className="h5">
                <a onClick={this.handleClick}>{data.name}</a>
              </div>
              <p className="ellipsis">{data.description}</p>
            </div>
          </Column>
          <Column className="is-2">
            <Text title={data.nodeCount} description={t('Node Count')} />
          </Column>
          <Column className="is-2">
            <Text
              title={data.k8sVersion}
              description={t('Kubernetes Version')}
            />
          </Column>
          <Column className="is-2">
            <Text title={data.provider} description={t('Cloud Provider')} />
          </Column>
          <Column className="is-2">
            <Text
              title={getLocalTime(data.createTime).format(
                `YYYY-MM-DD HH:mm:ss`
              )}
              description={t('Created Time')}
            />
          </Column>
        </Columns>
      </li>
    )
  }
}
