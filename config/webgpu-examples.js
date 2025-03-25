const data = window.threejs_org_examples_files?.WebGPU || [
  "webgpu_animation_retargeting",
  "webgpu_animation_retargeting_readyplayer",
  "webgpu_backdrop",
  "webgpu_backdrop_area",
  "webgpu_backdrop_water",
  "webgpu_camera",
  "webgpu_camera_array",
  "webgpu_camera_logarithmicdepthbuffer",
  "webgpu_clearcoat",
  "webgpu_clipping",
  "webgpu_compute_audio",
  "webgpu_compute_birds",
  "webgpu_compute_geometry",
  "webgpu_compute_particles",
  "webgpu_compute_particles_rain",
  "webgpu_compute_particles_snow",
  "webgpu_compute_points",
  "webgpu_compute_sort_bitonic",
  "webgpu_compute_texture",
  "webgpu_compute_texture_pingpong",
  "webgpu_compute_water",
  "webgpu_cubemap_adjustments",
  "webgpu_cubemap_dynamic",
  "webgpu_cubemap_mix",
  "webgpu_custom_fog",
  "webgpu_custom_fog_background",
  "webgpu_depth_texture",
  "webgpu_display_stereo",
  "webgpu_equirectangular",
  "webgpu_instance_mesh",
  "webgpu_instance_points",
  "webgpu_instance_sprites",
  "webgpu_instance_uniform",
  "webgpu_instancing_morph",
  "webgpu_lensflares",
  "webgpu_lightprobe",
  "webgpu_lightprobe_cubecamera",
  "webgpu_lights_custom",
  "webgpu_lights_ies_spotlight",
  "webgpu_lights_phong",
  "webgpu_lights_physical",
  "webgpu_lights_rectarealight",
  "webgpu_lights_selective",
  "webgpu_lights_spotlight",
  "webgpu_lights_tiled",
  "webgpu_lines_fat_raycasting",
  "webgpu_lines_fat_wireframe",
  "webgpu_lines_fat",
  "webgpu_loader_gltf",
  "webgpu_loader_gltf_anisotropy",
  "webgpu_loader_gltf_compressed",
  "webgpu_loader_gltf_dispersion",
  "webgpu_loader_gltf_iridescence",
  "webgpu_loader_gltf_sheen",
  "webgpu_loader_gltf_transmission",
  "webgpu_loader_materialx",
  "webgpu_materials",
  "webgpu_materials_alphahash",
  "webgpu_materials_arrays",
  "webgpu_materials_basic",
  "webgpu_materials_displacementmap",
  "webgpu_materials_envmaps_bpcem",
  "webgpu_materials_envmaps",
  "webgpu_materials_lightmap",
  "webgpu_materials_matcap",
  "webgpu_materials_sss",
  "webgpu_materials_transmission",
  "webgpu_materials_toon",
  "webgpu_materials_video",
  "webgpu_materialx_noise",
  "webgpu_mesh_batch",
  "webgpu_mirror",
  "webgpu_modifier_curve",
  "webgpu_morphtargets",
  "webgpu_morphtargets_face",
  "webgpu_mrt",
  "webgpu_mrt_mask",
  "webgpu_multiple_rendertargets",
  "webgpu_multiple_rendertargets_readback",
  "webgpu_multisampled_renderbuffers",
  "webgpu_occlusion",
  "webgpu_ocean",
  "webgpu_parallax_uv",
  "webgpu_particles",
  "webgpu_performance",
  "webgpu_performance_renderbundle",
  "webgpu_pmrem_cubemap",
  "webgpu_pmrem_equirectangular",
  "webgpu_pmrem_scene",
  "webgpu_portal",
  "webgpu_postprocessing_3dlut",
  "webgpu_postprocessing_afterimage",
  "webgpu_postprocessing_anamorphic",
  "webgpu_postprocessing_ao",
  "webgpu_postprocessing_bloom",
  "webgpu_postprocessing_bloom_emissive",
  "webgpu_postprocessing_bloom_selective",
  "webgpu_postprocessing_difference",
  "webgpu_postprocessing_dof",
  "webgpu_postprocessing_pixel",
  "webgpu_postprocessing_fxaa",
  "webgpu_postprocessing_lensflare",
  "webgpu_postprocessing_masking",
  "webgpu_postprocessing_motion_blur",
  "webgpu_postprocessing_outline",
  "webgpu_postprocessing_smaa",
  "webgpu_postprocessing_sobel",
  "webgpu_postprocessing_ssaa",
  "webgpu_postprocessing_ssr",
  "webgpu_postprocessing_traa",
  "webgpu_postprocessing_transition",
  "webgpu_postprocessing",
  "webgpu_procedural_texture",
  "webgpu_reflection",
  "webgpu_refraction",
  "webgpu_rendertarget_2d-array_3d",
  "webgpu_rtt",
  "webgpu_sandbox",
  "webgpu_shadertoy",
  "webgpu_shadowmap",
  "webgpu_shadowmap_csm",
  "webgpu_shadowmap_opacity",
  "webgpu_shadowmap_progressive",
  "webgpu_shadowmap_vsm",
  "webgpu_skinning",
  "webgpu_skinning_instancing",
  "webgpu_skinning_points",
  "webgpu_sky",
  "webgpu_sprites",
  "webgpu_storage_buffer",
  "webgpu_struct_drawindirect",
  "webgpu_texturegrad",
  "webgpu_textures_2d-array",
  "webgpu_textures_2d-array_compressed",
  "webgpu_textures_anisotropy",
  "webgpu_textures_partialupdate",
  "webgpu_tonemapping",
  "webgpu_tsl_angular_slicing",
  "webgpu_tsl_compute_attractors_particles",
  "webgpu_tsl_earth",
  "webgpu_tsl_editor",
  "webgpu_tsl_galaxy",
  "webgpu_tsl_halftone",
  "webgpu_tsl_interoperability",
  "webgpu_tsl_procedural_terrain",
  "webgpu_tsl_raging_sea",
  "webgpu_tsl_transpiler",
  "webgpu_tsl_vfx_flames",
  "webgpu_tsl_vfx_linkedparticles",
  "webgpu_tsl_vfx_tornado",
  "webgpu_video_frame",
  "webgpu_video_panorama",
  "webgpu_volume_cloud",
  "webgpu_volume_perlin",
  "webgpu_water",
  "webgpu_xr_cubes",
];
// 对数据进行分组
function groupData(data) {
    const grouped = {};
    // 遍历数据，根据下划线分隔后的第二个元素进行分组
    for (const id of data) {
        const groupid = id.split("_")[1];
        if (!grouped[groupid]) {
            grouped[groupid] = [];
        }
        grouped[groupid].push(id);
    }
    return grouped;
}

// 筛选出分组中元素数量少于 2 的项，并将它们合并到 "others" 组
function filterSmallGroups(grouped) {
    const others = [];
    for (const groupid in grouped) {
        if (grouped[groupid].length < 2) {
            others.push(...grouped[groupid]);
            delete grouped[groupid];
        }
    }
    grouped.others = others;
    return grouped;
}

// 将分组后的数据转换为特定格式的列表
function transformToFinalList(grouped) {
    return Object.keys(grouped).map((groupid) => ({
        pid: groupid,
        name: groupid,
        children: grouped[groupid].map((id) => ({
            id,
            name: id.replace(/webgpu_/, ""),
            codeUrl: 'https://threejs.org/examples/' + id + '.html',
            image: '../screenshots/' + id + '.jpg',
        }))
    }));
}

// 执行分组操作
const groupedData = groupData(data);
// 筛选出小分组
const filteredData = filterSmallGroups(groupedData);
// 转换为最终列表
const list = transformToFinalList(filteredData);

// 导出最终列表
export default list;