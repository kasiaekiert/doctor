# frozen_string_literal: true

ActiveAdmin.register Product do
  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  permit_params :name, :description, :thumbnail_image, :banner_image, :price_in_cents
  form html: { multipart: true } do |f|
    f.inputs 'General' do
      f.input :name
      f.input :description
      f.input :price_in_cents
    end

    f.inputs 'Images' do
      f.input :thumbnail_image, as: :file
      f.input :banner_image, as: :file
    end

    f.actions
  end

  show do
    attributes_table do
      row :name
      row :description
      row :price_in_cents

      row :thumbnail_image do |product|
        if product.thumbnail_image.attached?
          image_tag(url_for(product.thumbnail_image))
        end
      end

      row :banner_image do |product|
        if product.banner_image.attached?
          image_tag url_for(product.banner_image) if product.banner_image
        end
      end
    end
  end
  # or
  #
  # permit_params do
  #   permitted = %i[name image_url description price_in_cents]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end
end
