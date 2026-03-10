import type { ModalFuncProps } from 'ant-design-vue/lib/modal';
import { h } from 'vue';
import { message, notification, Modal } from 'ant-design-vue';
import { isString } from '/#/utils/is';

export interface ModalOptions extends ModalFuncProps {}
export type ModalOptionsPartial = Partial<ModalOptions> & Pick<ModalOptions, 'content'>;

message.config({ duration: 1.5, maxCount: 3 });
notification.config({ placement: 'topRight', duration: 3 });

function renderContent({ content }: Pick<ModalOptions, 'content'>) {
  if (isString(content)) {
    return h('div', content);
  } else {
    return content;
  }
}

function getBaseModalOpts() {
  return { okText: '好的', centered: true };
}
function getModalOpts(options: ModalOptionsPartial): ModalOptionsPartial {
  return {
    ...getBaseModalOpts(),
    ...options,
    content: renderContent(options),
    // icon: getIcon(icon),
  };
}

function createConfirm(options: ModalOptions) {
  Modal.confirm({
    centered: true,
    // icon: getIcon(options.iconType || 'warning'),
    ...options,
    content: renderContent(options)
  });
}
function createSuccessModal(opts: ModalOptionsPartial) {
  return Modal.success(getModalOpts(opts));
}
function createWarningModal(opts: ModalOptionsPartial) {
  return Modal.warning(getModalOpts(opts));
}
function createErrorModal(opts: ModalOptionsPartial) {
  return Modal.error(getModalOpts(opts));
}
function createInfoModal(opts: ModalOptionsPartial) {
  return Modal.info(getModalOpts(opts));
}

export function useMessage() {
  return {
    createMessage: message,
    createNotify: notification,
    createConfirm,
    createSuccessModal,
    createWarningModal,
    createErrorModal,
    createInfoModal
  };
}
