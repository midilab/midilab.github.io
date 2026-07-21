import React, { useState, useCallback } from 'react';
import { Heart, Copy, Check } from 'lucide-react';
import { BitcoinIcon, EthereumIcon, MoneroIcon } from '../Icons';
import styles from './index.module.css';

const methods = [
  {
    id: 'bitcoin',
    icon: BitcoinIcon,
    title: 'Bitcoin',
    description: 'Send directly on-chain, no middleman.',
    address: '1Ef5TRH4yPB8d4hqC2gA5Cdin1eW2bJA74',
  },
  {
    id: 'ethereum',
    icon: EthereumIcon,
    title: 'Ethereum',
    description: 'ETH or stablecoins (USDC/USDT) on mainnet.',
    address: '0xBc8b89B79Bd38a9dbe3469F92A644FfeD0958194',
  },
  {
    id: 'monero',
    icon: MoneroIcon,
    title: 'Monero',
    description: 'Private, untraceable donations, no middleman.',
    address: '46MoKa4GBRK9gSAWFxDJXK3RbV7jUyEsrfSMdggwtJFPQDQfqunj3DBMkzxTL3vfzMDNDKFTQHkbPdGkRz66M6fAUaQYgfY',
  }
];

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [text]);

  return (
    <div className={styles.actionBtn} onClick={handleCopy} type="button">
      {copied ? (
        <>
          <Check className="icon-sm" />
          Copied!
        </>
      ) : (
        <>
          <Copy className="icon-sm" />
          Copy address
        </>
      )}
    </div>
  );
}

export default function SupportMidilabSection() {
  const [selected, setSelected] = useState('bitcoin');

  return (
    <section id="support" className={`${styles.section} anchor-offset`}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.cardGrid}>
            <div className={styles.leftCol}>
              <span className={styles.tag}>
                <Heart className="icon-sm" />
                Support midilab
              </span>
              <h2 className={styles.heading}>
                Help us turn open designs into kits you can buy
              </h2>
              <p className={styles.desc}>
                Every schematic, board file, and line of firmware we publish stays open and free.
                We're now moving into producing our own kits and assembled devices, for makers who'd
                rather buy one than build it from raw files. Support at this stage funds prototypes,
                components, and the first manufacturing runs. It's optional, it's temporary, and
                it's genuinely appreciated.
              </p>
            </div>

            <div className={styles.rightCol}>
              {methods.map((method) => {
                const Icon = method.icon;
                const isSelected = selected === method.id;
                return (
                  <button
                    key={method.id}
                    className={`${styles.method} ${isSelected ? styles.methodSelected : ''}`}
                    onClick={() => setSelected(method.id)}
                    type="button"
                  >
                    <div className={`${styles.methodIcon} ${isSelected ? styles.methodIconSelected : ''}`}>
                      <Icon className={styles.methodIconSvg} />
                    </div>
                    <div className={styles.methodContent}>
                      <div className={styles.methodHeader}>
                        <h3 className={styles.methodTitle}>{method.title}</h3>
                      </div>
                      <p className={styles.methodDesc}>{method.description}</p>
                      {isSelected && (
                        <div className={styles.methodAction}>
                          <CopyButton text={method.address} />
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
