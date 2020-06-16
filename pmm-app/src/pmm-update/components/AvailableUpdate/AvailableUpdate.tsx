import React, { MouseEvent } from 'react';

import { Messages } from './AvailableUpdate.messages';
import * as styles from './AvailableUpdate.styles';

interface AvailableUpdateProps {
  onShowFullAvailableVersion: (e: MouseEvent) => void;
  newReleaseDate: string;
  newsLink: string;
  nextVersion: string;
}

export const AvailableUpdate = ({
  onShowFullAvailableVersion,
  newReleaseDate,
  newsLink,
  nextVersion,
}: AvailableUpdateProps) => {
  return (
    <section className={styles.availableUpdate}>
      <div onClick={onShowFullAvailableVersion}>
        <p>{Messages.availableVersion}:&nbsp;</p>
        <p className={styles.availableUpdate_version}>
          {nextVersion} <em>{newReleaseDate}</em>
          {newsLink && (
            <a href={newsLink} rel="noreferrer" target="_blank">
              {Messages.whatsNew}
            </a>
          )}
        </p>
      </div>
    </section>
  );
};
