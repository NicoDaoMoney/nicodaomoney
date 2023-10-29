import classNames from 'classnames';
import styles from './TokenDaoTotalSupply.module.css';
import { Address } from 'chain/components/Address';
import { useCurrentDao } from 'dao/components/CurrentDaoProvider';
import { SameWidthChildrenRow } from 'lib/ui/Layout/SameWidthChildrenRow';
import { TitledContent } from 'lib/ui/Layout/TitledContent';
import { TitledSection } from 'lib/ui/Layout/TitledSection';
import { enterprise } from 'types/contracts';

const membershipName: Record<enterprise.DaoType, string> = {
  multisig: 'Multisig',
  token: 'Token',
  nft: 'NFT collection',
};

export const AddressesOverview = () => {
  const { address, dao_membership_contract, funds_distributor_contract, dao_type } = useCurrentDao();

  return (
    <TitledSection title="Addresses">
      <SameWidthChildrenRow minChildrenWidth={320} gap={16}>
          <TitledContent title="DAO address">
            <Address value={address} />
          </TitledContent>
          <TitledContent title={`${membershipName[dao_type]} address`}>
            <Address value={dao_membership_contract} />
          </TitledContent>
          <TitledContent title={'Funds distributor address'}>
            <Address value={funds_distributor_contract} />
          </TitledContent>
      </SameWidthChildrenRow>
    </TitledSection>
  );
};
