import { memo, useCallback } from 'react';
import { Box, ChevronIcon, Text, color, Stack, StackProps, BoxProps } from '@stacks/ui';

import { useUpdateSearchInput } from '@app/store/assets/asset.hooks';
import { useSelectedAsset } from '@app/common/hooks/use-selected-asset';
import { AssetAvatar } from '@app/components/stx-avatar';
import { Caption } from '@app/components/typography';
import { formatContractId } from '@app/common/utils';

const SelectedAssetItem = memo(({ hideArrow, ...rest }: { hideArrow?: boolean } & BoxProps) => {
  const { selectedAsset, ticker, name, handleUpdateSelectedAsset } = useSelectedAsset();
  const setSearchInput = useUpdateSearchInput();

  const handleClear = useCallback(() => {
    setSearchInput('');
    handleUpdateSelectedAsset(undefined);
  }, [setSearchInput, handleUpdateSelectedAsset]);

  if (!selectedAsset) return null;

  const { contractAddress, contractName, name: _name } = selectedAsset;

  const isStx = name === 'Stacks Token';

  const gradientString = `${formatContractId(contractAddress, contractName)}::${_name}`;

  return (
    <Box
      width="100%"
      px="base"
      py="base-tight"
      borderRadius="8px"
      border="1px solid"
      borderColor={color('border')}
      userSelect="none"
      onClick={() => {
        if (!hideArrow) {
          handleClear();
        }
      }}
      {...rest}
    >
      <Stack spacing="base" alignItems="center" isInline>
        <AssetAvatar
          useStx={isStx}
          gradientString={gradientString}
          mr="tight"
          size="36px"
          color="white"
        >
          {name?.[0]}
        </AssetAvatar>

        <Stack flexGrow={1}>
          <Text display="block" fontWeight="400" fontSize={2} color="ink.1000" data-testId={'selected-asset-option'}>
            {name}
          </Text>
          <Caption>{ticker}</Caption>
        </Stack>

        {!hideArrow && (
          <Box ml="base" textAlign="right" height="24px">
            <ChevronIcon
              size="24px"
              direction="down"
              cursor="pointer"
              opacity={0.7}
              onClick={() => {
                handleClear();
              }}
            />
          </Box>
        )}
      </Stack>
    </Box>
  );
});

export const SelectedAsset = memo(
  ({ hideArrow, ...rest }: { hideArrow?: boolean } & StackProps) => {
    const { selectedAsset, balance, ticker } = useSelectedAsset();

    if (!selectedAsset) {
      return null;
    }

    return (
      <Stack spacing="base-loose" flexDirection="column" {...rest}>
        <Stack spacing="tight">
          <Text display="block" fontSize={1} fontWeight="500" mb="tight">
            Choose an asset
          </Text>
          <SelectedAssetItem hideArrow={hideArrow} />
        </Stack>
        {balance && (
          <Caption>
            Balance: {balance} {ticker}
          </Caption>
        )}
      </Stack>
    );
  }
);
